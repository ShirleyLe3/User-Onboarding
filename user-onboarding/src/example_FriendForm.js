// import React {useState} from 'react';
// import { v4 as uuid } from 'uuid'
// import Friend from './Friend'
// import FriendForm from './FriendForm'

// function App();

//     const [friends, setFriends] = useState(initialFriendsList)          //s

//     const [formValues, setFormValues] = useState(initialFormValues)     // hold state values

//     const onInputChange = event => {                                 // Change handler
//         const name = event.target.name
//         const value = event.target.value
//         }
//             setFormValues({
//                 ...formValues,
//                 [name]: value //not an array
//                 })
//     }
//     const onCheckboxChange = event => {
//         // const name = event.target.name
//         // const value = event.target.value
//         }

//                                                     // new object with id, attributes, etc
//     const newFriend = {
//         id: vvid(),
//         username: formalues.username,
//         email: formValues.email,
//         married: formValues.civil === 'single' ? false : true,
//         hobbies: Object.keys(formvalues.hobbies)
//             .filter(hobby => formValues.hobbies[hobby] === true)

//     }

//     const onSubmit = event => {
//         event.preventDefault()
//         const newFriend = {
//             id: uuid
//     }

//         //update list of array in state with new
//     setfriends([ ...friends, newFriend])
//     //clear form
//     setofValues(initialFormValue)
//     }
//     }

// <div  className='container'>
//   <header><h1>Friends App</h1></header>
//   {
//     friends.map(friend => {
//       return (
//         <Friend key={friend.id} details={friend} />

//       )
//     })
//   }
//   <FriendForm
//     values={formValues}
//     onInputChange={onInputChange}
//     onCheckboxChange={onCheckboxChange}
//     onSubmit={onSubmit}
//     />
// </div>
//   )
// )

// //dropdown

// //checkboxes

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
