import React, { Component } from 'react';
import axios from 'axios';
// import axiosWithConfig from '../utils/api/axiosWithConfig';
import Layout from '../component/layout';
import { Input } from "../component/input";
import Button from "../component/button";

class KritikSaran extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: '',
    };
  }

  componentDidMount() {
    this.fetchKritikSaran();
  }

  fetchKritikSaran = () => {
    axios.get('https://65256cd867cfb1e59ce742c4.mockapi.io/api/v1/saran') 
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  handleSubmit = () => {
    const newKritikSaran = { text: this.state.input };
    axios.post('https://65256cd867cfb1e59ce742c4.mockapi.io/api/v1/saran', newKritikSaran)
    .then(response => {
      console.log(response);
      this.fetchKritikSaran();
      this.setState({ input: '' });
    })
    .catch(error => {
      console.error('Error creating data:', error);
    });
  }  

  handleUpdate = (id, updatedText) => {
    axios.put(`https://65256cd867cfb1e59ce742c4.mockapi.io/api/v1/saran/${id}`, { text: updatedText }) 
      .then(response => {
        this.fetchKritikSaran(); 
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  }

  handleDelete = id => {
    axios.delete(`https://65256cd867cfb1e59ce742c4.mockapi.io/api/v1/saran/${id}`) 
      .then(response => {
        this.fetchKritikSaran(); 
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  }

  render() {
    return (
        <Layout>
      <div>
        <h1 className='title-saran'>Kritik dan Saran</h1>

        <ul className='saran'>
          {this.state.data.map(item => (
            <li className="list-saran"key={item.id}>
              {item.text}
              <Button 
              className="button-delete" 
              onClick={() => this.handleDelete(item.id)}
              label="delete"/>
               <Button 
              className="button-edit" 
              onClick={() => this.handleUpdate(item.id, prompt('Edit Kritik/Saran:', item.text))}
              label="edit"
              />
            </li>
          ))}
        </ul>
        </div>
        <form className="flex items-center gap-3">
        <Input
          className="input-saran"
          type="text"
          placeholder="Tambahkan Kritik/Saran"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Button 
        className='button-submit'
        label='Kirim'
        onClick={this.handleSubmit}>Tambahkan</Button>
        </form>
      </Layout>
    );
  }
}

export default KritikSaran;
