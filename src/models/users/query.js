
let REGISTER = `
  INSERT INTO users(first_name,last_name,email,gander,password) VALUES
  ($1,$2,$3,$4,$5) returning*
`;

let LOGIN = `
select 
user_id,
first_name,
email
from users
where
  first_name=$1 and password=$2 and status='active'
`;

let REGISTERCEEKUNIQUE = `
select 
email,
password
from users
where
  email=$1 or password=$2
`;

let GET = `
select 
user_id,
first_name,
last_name,
gander,
email,
created_at
from users
where 
  status='active'
`;

let GETBYID = `
select 
user_id,
first_name,
last_name,
gander,
email,
created_at
from users
where 
  status='active' and user_id=$1
`;


let EDIT = `
UPDATE
users
SET
first_name=$2,
last_name=$3
WHERE
  user_id=$1 and status='active'
  returning*
`;

let DELETE = `
UPDATE
users
SET
status='delete'
WHERE
  user_id=$1
  returning*
`;

let RESETPASSWORDCHEEKEMAIL = `
select 
first_name,
last_name,
email
from users
where
  status='active' and email=$1
`;

export default {
  REGISTER,
  LOGIN,
  REGISTERCEEKUNIQUE,
  GET,
  GETBYID,
  EDIT,
  DELETE,
  RESETPASSWORDCHEEKEMAIL
}