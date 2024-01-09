mongo <<EOF
db.createUser({
  user: 'apollo',
  pwd: 'apollo',
  roles: [
    {
      role: 'readWrite',
      db: 'mongo',
    },
  ],
});
EOF