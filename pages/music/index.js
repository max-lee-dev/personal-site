import React, {useEffect, useState} from 'react';
import {Box, Text} from '@chakra-ui/react';
import {usePathname} from "next/navigation";
import {useColorModeValue} from "@chakra-ui/react";

export default function Music() {
    const CLIENT_ID = "5076e52b92314231bf0104f7a0048eba";
    const CLIENT_SECRET = "1b90606d9ea14fdda1acb4cd2ede5a60";
    const [accesstoken, setAccessToken] = useState("");
    const [tracks, setTracks] = useState([]);
    const redirect_uri = "https://max-lee.dev/music";
    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,


        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(response => response.json())
            .then(data => setAccessToken(data.access_token))

        if (window.location.search.length > 0) {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            console.log(code)
            const body = {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirect_uri,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            };
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: headers,
                body: new URLSearchParams(body),
            })
                .then((res) => res.json())
                .then((data) => {

                    console.log(data)
                    setAccessToken(data.access_token)
                });


        }


    }, [])

    async function myData() {
        // get user my details
        const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                Authorization: `Bearer ${accesstoken}`,
            },
        });

        const data = await response.json();
        console.log(data)
        let tracks = data.items.map((track) => {
                return {
                    artist: track.name,
                    song: track.external_urls.spotify,
                    image: track.images[0].url,
                };

            }
        );

        setTracks(tracks)


    }

    async function requestAuthorization() {
        let url = 'https://accounts.spotify.com/authorize';
        url += '?&client_id=' + CLIENT_ID;
        url += '&response_type=code';
        url += '&redirect_uri=' + encodeURI(redirect_uri);
        url += '&show_dialog=true';
        url += '&scope=' + ('user-read-private user-read-email user-read-playback-state user-modify-playback-state user-top-read');

        window.location.href = url;

    }

    return (
        <>
            <main>
                <Box color={'white'}>
                    <h1>music</h1>
                    <button onClick={requestAuthorization}>login</button>
                    <Text>{accesstoken} updated</Text>
                    <button onClick={myData}>get data</button>
                    <ul>
                        {tracks.map((track) => (
                            <li key={track.song}>
                                <img src={track.image} alt={track.song}/>
                                <a href={track.song}>{track.artist}</a>
                            </li>
                        ))}
                    </ul>
                </Box>
            </main>
        </>
    )

}