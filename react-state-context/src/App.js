import React, {
  Component,
  createContext
} from 'react';
// import User from "./user";
import './App.css';

const UserContext = createContext({
  username: 'johndoe',
  firstName: 'John',
  lastName: 'Doe'
})
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

class App extends Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  // v2
  // render() {
  //   return (
  //     <div>
  //     {/* <User user={this.state.user} /> */}
  //     <UserProvider value={this.state.user}>
  //         <User />
  //       </UserProvider>
  //   </div>
  //   );
  // }

  // v3
  render() {
    return(
      <div>
        {/* <UserProvider value={
          {
            state: this.state.user,
            actions: {
              handleFirstNameChange: event => {
                const value = event.target.value
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    firstName: value
                  }
                }))
              },

              handleLastNameChange: event => {
                const value = event.target.value
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    lastName: value
                  }
                }))
              }
            }
          }
        }> */}
          <User />
        {/* </UserProvider> */}
      </div>
    )
  }
}

// v1
// const User = ({user}) => {
//   return <UserProfile {...user} />
// }

// v2
const User = () => (
  <div>
    <UserProfile />
  </div>
)

// v1
// const UserProfile = (props) => (
//   <div>
//     <h2>Profile Page of {props.username}</h2>
//     <UserDetails {...props} />
//   </div>
// )

// v2
// const UserProfile = (props) => (
//   <UserConsumer>
//     {context => {
//       return(
//         <div>
//           <h2>Profile Page of {context.username}</h2>
//           <UserDetails />
//         </div>
//       )
//     }}
//   </UserConsumer>
// )

// v3
const UserProfile = (props) => (
  <UserConsumer>
    {/* {({state}) => {
      return(
        <div>
          <h2>Profile Page of {state.username}</h2>
          <UserDetails />
        </div>
      )
    }} */}
     {context => {
      return(
        <div>
          <h2>Profile Page of {context.username}</h2>
          <UserDetails />
        </div>
      )
    }}
  </UserConsumer>
)

// v1
// const UserDetails = (props) => (
//   <div>
//     <p>Username: {props.username}</p>
//     <p>First Name: {props.firstName}</p>
//     <p>Last Name: {props.lastName}</p>
//   </div>
// )

// // v2
// const UserDetails = () => (
//   <div>
//     <UserConsumer>
//       {context => {
//         return (
//           <div>
//             <p>Userame: {context.username}</p>
//             <p>First Name: {context.firstName}</p>
//             <p>Last Name: {context.lastName}</p>
//           </div>
//         )
//       }}
//     </UserConsumer>
//   </div>
// )

// v3
const UserDetails = () => {
  return (
    <div>
      <UserConsumer>
        {/* {({ state, actions }) => {
          return (
            <div>
              <div>
                <p>Userame: {state.username}</p>
                <p>First Name: {state.firstName}</p>
                <p>Last Name: {state.lastName}</p>
              </div>
              <div>
                <div>
                  <input type="text" value={state.firstName} onChange={actions.handleFirstNameChange} />
                </div>
                <div>
                  <input type="text" value={state.lastName} onChange={actions.handleLastNameChange} />
                </div>
              </div>
            </div>
          )
        }} */}
        {context => {
        return (
          <div>
          <div>
            <p>Userame: {context.username}</p>
            <p>First Name: {context.firstName}</p>
            <p>Last Name: {context.lastName}</p>
          </div>
          <div>
            <input type="text" value={context.firstName}  />
          </div>
          <div>
            <input type="text" value={context.lastName}  />
          </div>
          </div>
        )
      }}
      </UserConsumer>
    </div>
  )
}

export default App;