import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export  const signup = async (req: Request, res: Response) => {
    await body('email').isEmail().run(req);
    await body('password').isLength({ min: 6 }).run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Logic to save user to database
    res.status(201).json({ message: 'User created successfully' });
};


