import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/routesign';



const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

app.use(express.json());

// Create User
app.post('/users', async ( req:Request, res: Response) => {
    const { email, phone } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                email,
                phone,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        console.log("the errpor",error);
        res.status(400).json({ error: 'User creation failed.',message:error });
    }
});

// Get All Users
app.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
});
