import React from 'react';
import axios from 'axios';
import ExternalLink from '../../components/ExternalLink.js';
import './index.css';

class ContributorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      contributors: {}
    };
  }

  async componentDidMount() {
    try {
      await this.fetchRepositories();
      await this.fetchContributors();
    }
    catch (e) {
      console.error(e);
    }
  }

  async fetchRepositories() {
    try {
      let response = await axios.get('https://api.github.com/orgs/TheBastionBot/repos')
      if (response.data && response.data.length) {
        this.setState({
          repositories: response.data.map(repo => repo.name)
        });
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  async fetchContributors() {
    try {
      let contributors = this.state.contributors;

      for (let repo of this.state.repositories) {
        let response = await axios.get(`https://api.github.com/repos/TheBastionBot/${repo}/contributors`);

        if (response.data && response.data.length) {
          let users = response.data.filter(user => user.type === 'User');

          for (let user of users) {
            if (contributors.hasOwnProperty(user.login)) {
              contributors[user.login] += user.contributions;
            }
            else {
              contributors[user.login] = user.contributions;
            }
          }
        }
      }

      this.setState({
        contributors: contributors
      });
    }
    catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div id='contributors'>
        <div className='header'>
          <h1>Contributors</h1>
          <p>All the users who have contributed code to The Bastion Bot Project.</p>
        </div>

        <div className='container'>
          {
            Object.keys(this.state.contributors).length
            ?
              Object.keys(this.state.contributors).map((user, i) => {
                return (
                  <div className='contributor' key={ i }>
                    <ExternalLink to={ `https://github.com/${user}` }>
                      <div className='image'>
                        <img
                          src={ `https://github.com/${user}.png?v=${Math.random()}` }
                          alt='User Avatar'
                          height='150'
                          width='150'
                        />
                      </div>
                      <div className='details'>
                        <h4>{ user }</h4>
                        <p><strong>{ this.state.contributors[user] }</strong> Contributions</p>
                      </div>
                    </ExternalLink>
                  </div>
                );
              })
            :
              <div>Fetching contributors...</div>
          }
        </div>
      </div>
    );
  }
}

export default ContributorsPage;