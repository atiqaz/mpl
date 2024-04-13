import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import { AppContext } from '../Context/StoreContext';
const useApi = () => {
  const { tokens, setTokens, role, setRole } = useContext(AppContext);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const api = axios.create({
    baseURL: 'http://localhost:5000', // Update this with your server URL
    headers: {
      'Content-Type': 'application/json'
      // You can add other headers here if needed
    }
  });

  const fetchData = async (url, method = 'GET', body = null) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.request({
        url,
        method,
        data: body
      });
      const isAdmin = response.data.user.role
      const token = response.data.token
      Cookies.set('role', isAdmin)
      Cookies.set('token', token)
      setRole(isAdmin)
      setTokens(token)
      if (isAdmin !== "user") {
        setTimeout(() => {
          navigate('/admin')
        }, 500)
      } else {
        setTimeout(() => {
          navigate('/user')
        }, 500)
      }
      setData(response.data);
    } catch (error) {

      console.log(error?.response?.data?.error || error?.message)
      setError(error?.response?.data || error);
    } finally {
      setLoading(false);
      }
  };

  const AddUser = async (url, method = 'POST', body = null) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.request({
        url,
        method,
        data: body
      });
      setData(response.data);
      setTimeout(() => {
        navigate('/')
      }, 500)
    } catch (error) {

      console.log(error?.response?.data?.error || error)
      setError(error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };
  
  const FetchAllPlayers = async (url, method = 'GET', body = null) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.request({
        url,
        method,
        data: body
      });
      setData(response.data);
      // setTimeout(() => {
      //   navigate('/')
      // }, 500)
    } catch (error) {

      console.log(error?.response?.data?.error || error)
      setError(error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };
  const playerRegister = async (url, method = 'POST', body = null, profile) => {
let formData  =  new FormData()
formData.append("file",profile)

    try {
      setLoading(true);
      setError(null);
      setData(null)
      const response = await api.request({
        url,
        method,
        data: body
      });
      console.log(response)
      const profileres = await api.request({
        url:`api/player/uploadProfile/${response.data.players._id}`,
        method:"PUT",
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data', // Make sure to set the correct content type
        }
      }) 
      setData(response.data);
      console.log(profileres)
      // setTimeout(() => {
      //   navigate('/')
      // }, 500)
    } catch (error) {

      console.log(error?.response?.data?.error || error)
      setError(error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };
const getPayerById = async (url, method = 'POST', body = null, ) => {


    try {
      setLoading(true);
      setError(null);
      setData(null)
      const response = await api.request({
        url,
        method,
        data: body
      });
      console.log(response)
   
      setData(response.data);
    } catch (error) {

      console.log(error?.response?.data?.error || error)
      setError(error?.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData, AddUser,FetchAllPlayers,playerRegister,getPayerById };
};

export default useApi;
