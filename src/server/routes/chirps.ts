import * as express from 'express';
import chirpsStore from '../chirpsstore';
import { number, string } from 'prop-types';


let router = express.Router();

router.get('/test', (req, res) => res.json('wtf?'))

router.get('/', (req, res, next) => {

  const data = chirpsStore.GetChirps();
  const chirps = Object.keys(data).map((key) => {
    return {
      id: key,
      //@ts-ignore
      user: data[key].user,
      //@ts-ignore
      text: data[key].text
    }
  });

  chirps.pop();

  res.json(chirps);

});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let getChirp= chirpsStore.GetChirp(id);

  chirpsStore.GetChirp(id);
  
  res.json(getChirp);
});

router.post('/', (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.json('Chirp added!');
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let chirp = req.body;

  chirpsStore.UpdateChirp(id, chirp);
  res.json('Successful Edit!');
  res.sendStatus(200);
}
);

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  chirpsStore.DeleteChirp(id);
    res.json('Chirp Deleted!')
    res.send('Chirp Deleted!');
  
});



export default router;