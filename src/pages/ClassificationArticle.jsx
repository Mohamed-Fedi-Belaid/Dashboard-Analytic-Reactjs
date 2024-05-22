import React, { useState } from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import axios from 'axios'
export default function ClassificationArticle() {
  const [articleName, setArticleName] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [predictedCategory, setPredictedCategory] = useState('');

  const handlePredict = async () => {
    const sendData = {
      "article": articleName,
      "description": articleDescription
    }
    console.log(sendData);
     await axios.post('http://127.0.0.1:8000/category_prediction', sendData)
    .then((response) => {console.log(response)
      const jsonData = JSON.parse(response.data)
      console.log([Object.keys(jsonData)[0],Object.values(jsonData)[0]]);
      setPredictedCategory([Object.keys(jsonData)[0],Object.values(jsonData)[0]])
    })
    .catch((err) => {const {response}= err;
      console.log(err);
      console.log(response?.data);});

// Assuming the API response contains a field named "category"
  };

  return (
    <>
      <div className='bgcolor'>
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={{ height: '80vh' }}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Classification des Articles
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Entrez les détails de l'article pour prédire sa catégorie.
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                      <TextField
                        label="Nom d'article"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={articleName}
                        onChange={(e) => setArticleName(e.target.value)}
                      />
                      <TextField
                        label="Description de l'article"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={articleDescription}
                        onChange={(e) => setArticleDescription(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePredict}
                        sx={{ mt: 2 }}
                      >
                        Prédire
                      </Button>

                      {predictedCategory && (
                        <TextField
                          label="Catégorie Prédit"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          value={predictedCategory}
                          InputProps={{
                            readOnly: true,
                          }}
                          sx={{ mt: 2 }}
                        />
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
            </Grid>
            <Box height={20}/>
            <Footer />


          </Box>
        </Box>
      </div>
    </>
  );
}
