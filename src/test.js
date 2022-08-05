import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createContext, useEffect,useState } from 'react';
import { render } from '@testing-library/react';
import Main from './main';

const Test = () => {
    //変数をフックで関数化処理する仕組み
    //propsはfetchで取ってきたjsonを入れている
    const [posts, setPosts] = useState([])
    //keyWordはinputタグのvalueを保存している
    const [keyWord,setKeyword] = useState('')
    //本のタイトルを配列で格納している
    const title = posts.map(x => x.volumeInfo.title)
   // const thumbnail = posts.map(x =>x.volumeInfo.imageLinks.thumbnail)
    //isbnを入れている変数
    // const [isbn, setIsbn] = useState();
    //本をタイトル検索するapi
    const apiSerch = () =>{
        fetch('https://www.googleapis.com/books/v1/volumes?q='+keyWord)
            .then(res => res.json())
            .then(data => {
                setPosts(data.items)
                setUnko(keyWord)
            })
            console.log('動きました')
    }
    //console.log(thumbnail)
    //本のタイトルなどを補完提案するapi
   /* const serchAssist = () =>{
        fetch(''+keyWord)
         .then(res => res.json())
         .then(data => {
             console.log(data)
         })
 }*/
    //inputに書かれたものをリアルタイムでkeyWordに代入する     
    const handleChange = (e) =>{
        setKeyword(() => e.target.value)
    }
    const [unko,setUnko] = useState('あ')
    const value = {
        unko,
        setUnko,
    };
    return (
        <>
        <Stack direction="row" spacing={2}>
        <TextField id="standard-basic" label="Serch" variant="standard" onChange={handleChange}/>
        <Button variant="outlined" onClick={apiSerch}>検索</Button>
        </Stack>
        </>
    )
};

export default Test;