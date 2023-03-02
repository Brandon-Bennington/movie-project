import React, { useEffect, useState } from 'react';


function MovieForm(props) {
    

   //set initial state  
   const [title, setTitle] = useState("film")
   const [actors,setActors] = useState(["actor1","actor2"])
   const [plot,setPlot] = useState("this is a plot")
   const [genre,setGenre] = useState("Gallo")
   const [imdbRating,setImdbRating] = useState(0.0)
   const [director,setDirector] = useState("A director")
   const [year,setYear] = useState(0)
   const [dateAdded, setDateAdded] = useState(new Date().toISOString())
//    const [inputValues, setInputValues] = useState({
//         title: "",
//         actors: [],
//         plot: "",
//         genre:"",
//         imdbRating:0.0,
//         director: "",
//         year: 0
//    })



    // const handleChange = event => {
    //     const { name, value } = event.target;
    // }
    
    //reset inputs
    const reset = () => {
        setTitle("");
        setActors([]);
        setPlot("");
        setGenre("");
        setImdbRating(0.0);
        setDirector("");
        setYear(0);
    }

    const onFormSubmit = event => {

        event.preventDefault();
        const newDate = new Date().toISOString();
        
        props.addMovie({
            title, 
            actors, 
            plot,
            genre,
            imdbRating,
            director,
            year,
            newDate
        });
        console.log(newDate);

        //clear inputs by setting form to inital state
        setDateAdded(newDate);
        reset();
    
    }

    // const handleOnChange = event => {
    //     const { name, value } = event.target
    //     setInputValues({ ...inputValues,[name]: value })
    // }



    // need to use a arrow function onChange={() => setYear(year)}
    // or we will get the "too many re-render error"
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="title">Title :</label>
            <input 
                type="text" 
                id="title" 
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                /><br/>
            <label htmlFor="actors">Actors:</label>
            <input 
                type="text" 
                id="actors" 
                name="actors"
                
                value={actors} 
                onChange={e => setActors(e.target.value)}
                />
            <br/>
             <label htmlFor="plot">Plot:</label>
             <input 
                type="text" 
                id="plot" 
                name="plot"
                value={plot} 
                onChange={e => setPlot(e.target.value)}
                /><br/>
             <label htmlFor="genre">Genre:</label>
             <input 
                type="text" 
                id="genre" 
                name="genre"
                value={genre} 
                onChange={e => setGenre(e.target.value)}
                />
                <br/>
            <label htmlFor="imdbRating">imdbRating:</label>
             <input 
                type="text" 
                id="imdbRating" 
                name="imdbRating"
                value={imdbRating} 
                onChange={e => setImdbRating(e.target.value)}
                />
            <br/>
            <label htmlFor="director">Director:</label>
             <input 
                type="text" 
                id="director" 
                name="director"
                value={director} 
                onChange={e => setDirector(e.target.value)}
                />
            <br/>
            <label htmlFor="year">Year:</label>
             <input 
                type="text" 
                id="year" 
                name="year"
                value={year} 
                onChange={e => setYear(e.target.value)}
            />
             <br/>
            <button type="submit">
                Submit
            </button>
        </form>
    );

        

}


export default MovieForm