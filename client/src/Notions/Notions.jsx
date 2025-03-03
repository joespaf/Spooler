import React, { useState, useEffect } from "react";
import axios from 'axios'
import NotionsList from "./NotionsList";
import NotionsForm from "./NotionsForm";
const Notions = (props) => {
  const [notions, setNotions] = useState([])
  const getAllNotionsDB = () => {

    axios.get('/api/notions/')
      .then((responceObj) => {
        setNotions(responceObj.data)
      }).catch(() => console.log('Failed to get Notions from Database'))
  };
  useEffect(() => {
    getAllNotionsDB()
  }, []);

  return (
    <div>
      <h1>Notions Stash</h1>
      <NotionsForm />
      <NotionsList notions={notions} />

    </div>
  )

}
export default Notions