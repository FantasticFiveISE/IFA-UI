const testCases = {
    //login
    "Login with wrong creds should pop an error message": false,
    "Login with right creds should login successfully": false,

    // navigation
    "Go to specific page should move to the correct page": false,

    // create team
    "Should not show create team to guest user": false,
    "Should show create team for Fan+ users": false,
    "Should open create team modal when create team was pressed": false,
    "Should create team when form is filled correctly": false,
    "Should not create team and pop an error when form is not filled correctly": false,
    "Should add new team to team list after creation": false,

    // Define policy
    "should show create season for association agent user": false,
    "Should not show create season for not association agent user": false,

    // Notifications and game
    "Should show Follow button to all Fan users": false,
    "Should open create event modal when create event is pressed": false,
    "Should send notification to all followers when new event was added": false,
    "Should add new event to game after it was added": false,
    
    // export report
    "Should export report when export report was pressed": false,

    // role validation
    "Shouldn't show any menu for guest users": false,
    "Should add Create event and export game to referree that referre on givan game": false,

    // logout
    "Should logout when logout is pressed": false
}


const testCases3005 = {
       //login
       "Login with wrong creds should pop an error message": true,
       "Login with right creds should login successfully": true,
   
       // navigation
       "Go to specific page should move to the correct page": true,
   
       // create team
       "Should not show create team to guest user": true,
       "Should show create team for Fan+ users": true, // true only for Fans (not other users)
       "Should open create team modal when create team was pressed": true,
       "Should create team when form is filled correctly": true,
    //    "Should not create team and pop an error when form is not filled correctly": false, (Not implemented yet)
       "Should add new team to team list after creation": true,
       "When create new team, the user who created the team should be the owner": false, // Should Fix
   
       // Define policy - Cannot be tested due to missing test user
       "should show create season for association agent user": false,
       "Should not show create season for not association agent user": false,
   
       // Notifications and game
       "Should show Follow button to all Fan users": true,
       "Should open create event modal when create event is pressed": true,
       "Should send notification to all followers when new event was added": true,
       "Should add new event to game after it was added": true,
       
       // export report
       "Should export report when export report was pressed": true,
   
       // role validation
       "Shouldn't show any menu for guest users": true,
       "Should add Create event and export game to referree that referre on givan game": true,
   
       // logout
       "Should logout when logout is pressed": true
}

