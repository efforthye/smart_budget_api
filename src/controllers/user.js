'use strict';

import { Router } from 'express';

const router = Router();

router.post('/join', function (req, res, next) {
  try {
    const {} = req.body;
    console.log(req.body);
  } catch (e) {
    console.error(e);
    return;
  }
});

export default { router };
