// export default [
//   {
//     teamName: "test",
//     stadium: "Test field",
//     fields: ["Test field"],
//     players: [{name: "Naor"}, {name: "Noga"}],
//     coaches: [],
//     managers: [{name: "Mohsan"}],
//     owners: ["user"],
//     teamStatus: "Open",
//   },
// ];

export default [
  {
      "teamName": "testTeam",
      "stadium": {
          "fieldName": "testField",
          "propertyCost": 1.0
      },
      "fields": [
          {
              "fieldName": "testField",
              "propertyCost": 1.0
          }
      ],
      "players": [
          {
              "name": "Noga Zohar",
              "userName": "noga123",
              "mail": "noga@gmail.com",
              "alertsMessages": [],
              "currentTeam": "testTeam",
              "birthDate": null,
              "position": null,
              "squadNumber": null
          }
      ],
      "coaches": [
          {
              "name": "Roy Judes",
              "userName": "roy123",
              "mail": "roy@gmail.com",
              "alertsMessages": [],
              "currentTeam": "testTeam",
              "role": null,
              "qualification": null
          }
      ],
      "managers": [
          {
              "name": "Mohsen Abdalla",
              "userName": "mohsen123",
              "mail": "mohsen@gmail.com",
              "alertsMessages": [],
              "currentTeam": "testTeam"
          }
      ],
      "owners": [
          {
              "name": "Alona Barkat",
              "userName": "alona123",
              "mail": "owner@gmail.com",
              "alertsMessages": [],
              "managerAppointments": [],
              "ownerAppointments": [],
              "team": "testTeam"
          }
      ],
      "teamStatus": "Open"
  }
];
