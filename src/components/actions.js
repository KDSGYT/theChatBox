/**
 * 
 * @param { string } name name entered by the user
 * @param { number } chatRoomNumber chatroom number they want to enter
 * @param { function } setState function to save the values.
 */
export const handleSubmit = (name, chatRoomNumber, setState) => {
    console.log("Submitted");
    setState({ name, chatRoomNumber });
}


