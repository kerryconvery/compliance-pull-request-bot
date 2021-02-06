/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("pull_request.opened", async (context) => {
    const projectCard = {
      column_id: 12714283,
      content_type: 'PullRequest',
      content_id: context.payload.pull_request.id
    }
    
    return context.octokit.projects.createCard(projectCard);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
