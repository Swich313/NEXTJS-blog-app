import {MongoClient} from 'mongodb';

const handler = async (req, res) => {
    if(req.method === 'POST'){
        const {email, name, message} = req.body;

        if(!email || !email.includes('@') ||
           !name || name.trim() === '' ||
           !message || message.trim() === '' ){

            res.status(422).json({message: 'Invalid input!'});
        }

        const newMessage = {email, name, message};
        let client;
        try {
            // const db_path = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@${process.env.mongoDB_cluster}/${process.env.mongoDB_database}?retryWrites=true&w=majority`;
            client = await MongoClient.connect(process.env.DB_CONNECTION);
        } catch (e) {
            res.status(500).json({message: 'Could not connect to DB!'});
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        } catch (e) {
            await client.close();
            res.status(500).json({message: 'Storing message failed!'});
            return;
        }

        await client.close();

        console.log(newMessage)
        res.status(201).json({message: 'Message was successfully stored', data: newMessage})
    }
};

export default handler;