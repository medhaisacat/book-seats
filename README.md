# book-seats

## Get list of floors
/getlistoffloors?timeslot=12:00-1:00

Timeslot could be among ["12:00-1:00", "1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"]

Returns JSON of floors with their seats
Eg: [["1st floor",{"seats":[0,0,0,0,0]}],["2nd floor",{"seats":[0,0,0,0,0]}],["3rd floor",{"seats":[0,0,0,0,0]}],["4th
floor",{"seats":[0,0,0,0,0]}],["5th floor",{"seats":[0,0,0,0,0]}]]

## Get seats by floor
/getseatsbyfloor?timeslot=12:00-1:00&floor=1st floor

Timeslot could be among ["12:00-1:00", "1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"]
Floor could be among ["1st floor", "2nd floor", "3rd floor", "4th floor", "5th floor"]

Returns JSON of seats with attributes available, selected, booked
Eg: {"available":[0,1,2,3,4],"booked":[],"selected":[]}

## Block user selected seats
/blockuserselectedseats?timeslot=12:00-1:00&floor=1st floor&seats=4

Timeslot could be among ["12:00-1:00", "1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"]
Floor could be among ["1st floor", "2nd floor", "3rd floor", "4th floor", "5th floor"]
Seats is an array which can take values among [1,2,3,4,5]

Does not return any value
Future work: Could be updated to return error upon failure

## Book user selected seats
/bookuserselectedseats?timeslot=12:00-1:00&floor=1st floor&seats=4

Timeslot could be among ["12:00-1:00", "1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"]
Floor could be among ["1st floor", "2nd floor", "3rd floor", "4th floor", "5th floor"]
Seats is an array which can take values among [0,1,2,3,4]

Does not return any value 
Future work: Could be updated to return error upon failure
