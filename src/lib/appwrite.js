// src/lib/appwrite.js
import { Client, Databases, ID, Query, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('688b5c1300084851c0e9');

    
const account = new Account(client);
const databases = new Databases(client);
const databaseId = '688b7ba900291108e6ad';
const usersCollectionId = '688b7bc0001837316b82';

export { client, databases, databaseId, usersCollectionId, ID, Query, account };