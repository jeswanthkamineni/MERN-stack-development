import 'dotenv/config';
import mongoose from 'mongoose';
import { Darshan, Pooja, Event } from './models/index.js';
await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smart-temple');
await Promise.all([Darshan.deleteMany(), Pooja.deleteMany(), Event.deleteMany()]);
await Darshan.insertMany([{ name: 'General Darshan', description: 'A peaceful daily darshan experience.', fee: 50, date: 'Daily', timeSlots: ['06:00 AM', '10:00 AM', '05:00 PM'], availability: 120 }, { name: 'Special Darshan', description: 'A closer, quieter visit with priority entry.', fee: 250, date: 'Daily', timeSlots: ['07:00 AM', '04:00 PM'], availability: 42 }, { name: 'VIP Darshan', description: 'Priority access for a deeply personal moment.', fee: 750, date: 'Daily', timeSlots: ['08:00 AM', '06:00 PM'], availability: 12 }]);
await Pooja.insertMany([{ name: 'Abhishekam', description: 'Sacred bathing ceremony with traditional offerings.', price: 1100, duration: '45 min', availability: ['Mon', 'Wed', 'Fri'] }, { name: 'Archana', description: 'Personalised name and nakshatra prayer.', price: 251, duration: '20 min', availability: ['Daily'] }, { name: 'Sahasranama Archana', description: 'A devotional recitation of a thousand names.', price: 501, duration: '35 min', availability: ['Tue', 'Thu', 'Sat'] }]);
await Event.insertMany([{ name: 'Brahmotsavam', description: 'Nine days of music, processions and sacred celebration.', date: '2026-09-14', time: '06:00 AM', location: 'Temple Courtyard', registrationLimit: 500 }, { name: 'Community Annadanam', description: 'A shared meal served with care to every visitor.', date: '2026-09-06', time: '12:30 PM', location: 'Annadanam Hall', registrationLimit: 300 }]);
console.log('Development data seeded'); await mongoose.disconnect();
