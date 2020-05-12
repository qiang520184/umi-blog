import ReactAplayer from 'react-aplayer';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default (props) => {
    const [options, setOptions] = useState({ ...props })
    useEffect(() => {
        async function getData() {
            let res = await axios.get('https://api.i-meto.com/meting/api?server=tencent&type=playlist&id=2744509819&r=0.44551135745423176')
            let audio = []
            res.data && res.data.forEach(item => {
                audio.push({
                    name: item.title,
                    artist: item.author,
                    url: item.url,
                    cover: item.pic,
                    lrc: item.lrc
                })

            });
            setOptions({ ...options, audio })
        }
        getData()
    }, [])
    return (
        <ReactAplayer key={new Date().getTime()} {...options} />
    )
}