# sh curl-scripts/json/sign-in.sh

# don't use a password you use for any real websites!
curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '
  {
    "credentials":
     {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }
'

echo
