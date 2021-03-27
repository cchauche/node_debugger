const _ = require('lodash');

module.exports = {
  public: _.template(
    `<h2>Stats for user: <%= username %></h2>
  <h4>Public Repos: <%= public %></h4>
  <a href="<%= url %>">Again!</a>
  `
  ),
  private: _.template(
    `<h2>Stats for user: <%= username %></h2>
  <h4>Public Repos: <%= public %></h4>
  <h4>Private Repos: <%= private %></h4>
  <a href="<%= url %>">Again!</a>
  `
  ),
};
