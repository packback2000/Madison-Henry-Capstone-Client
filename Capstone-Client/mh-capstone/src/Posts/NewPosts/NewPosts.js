import React from 'react';
import axios from 'axios';

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
            let username = window.location.pathname.split('/')[1];
            postData.map((info) => {
                if (info.name === username) {
                    this.setState({
                        data: info
                    })
                }
            })
        })
    }

    componentDidMount() {
        this.fetchPostDetails();
    };


render() {    
    console.log(this.state.data)
    const postData = this.state.data.map((info) => {
        return(
            <table>
                <tbody>
                    <tr>
                        <td>{info.body}</td>
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