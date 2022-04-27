import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class NewPosts extends React.Component {
    constructor(props){
    super(props);
        this.state = {
        data: []
    }}

    fetchPostDetails() {
        axios
        .get('http://localhost:5051/posts')
        .then((response) => {
            const postData = response.data;
            
                    this.setState({
                        data: postData
                    })
                })
    }

    componentDidMount() {
        this.fetchPostDetails();
    };


render() {    
    const postData = this.state.data.map((info) => {
        return(
            <table>
                <tbody>
                    <tr>
                        <Link to={`/posts/${info.post_id}/comments`}>
                        <td>{info.title}</td>
                        </Link>
                    </tr>
                </tbody>
            </table> 
        )
    })
   
    return(
        <section>
          {postData}
        </section>
    )
}

}