const db = require('../db/queries');

async function getUsernames(req, res) {
  const usernames = req.query.search
    ? await db.searchUsernames(req.query.search)
    : await db.getAllUsernames();
  console.log('Usernames: ', usernames);
  res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
}

function createUsernameGet(req, res) {
  res.render('new', { title: 'New user' });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
}

async function deleteAllPost(req, res) {
  await db.deleteAllUsernames();
  res.redirect('/');
}

function deleteAllGet(req, res) {
  res.render('deleteAll', { title: 'Delete all usernames' });
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllGet,
  deleteAllPost,
};
