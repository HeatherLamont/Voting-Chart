const Form = ({handleVote}) => {

   const handleChange = (event) => {
       event.preventDefault()
       console.log(event.target.tutors.value);
    handleVote(event.target.tutors.value);
   }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //   console.dir(event.target.value);
    // }

    return ( 

        <form onSubmit={handleChange}>

            <select  name="tutors" id="tutors">
            <option value="Zsolt">Zsolt</option>
            <option value="Sky">Sky</option>
            <option value="Stan">Stan</option>
            </select>
            <input type="submit" value = "Vote!"></input>
        </form>
     );
}
 
export default Form;

