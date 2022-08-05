/*import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CallAlert from './callAlert';

const Fetch = () => {

    const [posts, setPosts] = useState([])
    const title = 'ようじつ'

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=${title}}', {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(data)
            })
        const [serchWord, setSerchWord] = useState('')
        const [keyword, setKeyword] = useState('')
        const handleChange = (e) =>{
            setSerchWord(() => e.target.value)
            setKeyword(() => e.target.value)
            console.log(keyword)
            console.log(serchWord)
        }
         
    },[])
        return (
        <>
        <Stack direction="row" spacing={2}>
        <TextField id="standard-basic" label="Serch" variant="standard" onChange={handleChange}/>
        <Button variant="outlined" onClick={CallAlert}>検索</Button>
        </Stack>
        </>
        );
}

export default Fetch;*/
