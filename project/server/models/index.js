import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({ name: { type: String, required: true }, email: { type: String, required: true, unique: true, lowercase: true }, mobile: String, password: { type: String, select: false }, role: { type: String, enum: ['User', 'Admin'], default: 'User' } }, { timestamps: true });
const darshanSchema = new mongoose.Schema({ name: String, description: String, fee: Number, date: String, timeSlots: [String], availability: Number });
const poojaSchema = new mongoose.Schema({ name: String, description: String, price: Number, duration: String, availability: [String] });
const eventSchema = new mongoose.Schema({ name: String, description: String, date: String, time: String, location: String, registrationLimit: Number });
const bookingFields = { user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, date: String, time: String, status: { type: String, default: 'Pending' } };
const darshanBookingSchema = new mongoose.Schema({ ...bookingFields, darshan: { type: mongoose.Schema.Types.ObjectId, ref: 'Darshan' }, timeSlot: String, numberOfPersons: Number }, { timestamps: true });
const poojaBookingSchema = new mongoose.Schema({ ...bookingFields, pooja: { type: mongoose.Schema.Types.ObjectId, ref: 'Pooja' } }, { timestamps: true });
const donationSchema = new mongoose.Schema({ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, donorName: String, email: String, mobile: String, category: String, amount: Number, status: { type: String, default: 'Received' } }, { timestamps: true });
const eventRegistrationSchema = new mongoose.Schema({ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, registrationDate: { type: Date, default: Date.now }, status: { type: String, default: 'Registered' } });
export const User = mongoose.model('User', userSchema);
export const Darshan = mongoose.model('Darshan', darshanSchema);
export const Pooja = mongoose.model('Pooja', poojaSchema);
export const Event = mongoose.model('Event', eventSchema);
export const DarshanBooking = mongoose.model('DarshanBooking', darshanBookingSchema);
export const PoojaBooking = mongoose.model('PoojaBooking', poojaBookingSchema);
export const Donation = mongoose.model('Donation', donationSchema);
export const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);
