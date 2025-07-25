const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User, Event, Task } = require('./models');

// 1. CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tribeserve', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDB = async () => {
  try {
    // 2. CLEAR EXISTING DATA
    await User.deleteMany({});
    await Event.deleteMany({});
    await Task.deleteMany({});

    console.log('🗑️ Database cleared!');

    // 3. CREATE SAMPLE USERS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt); // Default password for all test users

    const organizer = await User.create({
      name: "Community Organizer",
      email: "organizer@tribeserve.com",
      password: hashedPassword,
      role: "organizer",
      skills: ["leadership", "project management"],
    });

    const volunteer1 = await User.create({
      name: "John Volunteer",
      email: "john@tribeserve.com",
      password: hashedPassword,
      role: "volunteer",
      skills: ["carpentry", "painting"],
    });

    const volunteer2 = await User.create({
      name: "Alice Helper",
      email: "alice@tribeserve.com",
      password: hashedPassword,
      role: "volunteer",
      skills: ["cooking", "first aid"],
    });

    console.log('👥 Sample users created!');

    // 4. CREATE SAMPLE EVENTS
    const beachCleanup = await Event.create({
      title: "Beach Cleanup Day",
      description: "Help remove trash from Santa Monica Beach",
      date: new Date("2023-12-15"),
      location: "Santa Monica Beach, CA",
      tags: ["environment", "outdoors"],
      createdBy: organizer._id,
      attendees: [volunteer1._id, volunteer2._id],
    });

    const foodDrive = await Event.create({
      title: "Food Distribution",
      description: "Distribute meals to homeless families",
      date: new Date("2023-12-20"),
      location: "Downtown Shelter, LA",
      tags: ["charity", "hunger relief"],
      createdBy: organizer._id,
      attendees: [volunteer2._id],
    });

    console.log('🎪 Sample events created!');

    // 5. CREATE SAMPLE TASKS
    await Task.create([
      {
        title: "Collect Plastic Waste",
        description: "Gather plastic bottles and bags",
        requiredSkills: ["cleaning"],
        assignedTo: volunteer1._id,
        event: beachCleanup._id,
        status: "pending"
      },
      {
        title: "Prepare Lunch Boxes",
        description: "Assemble 200 meal kits",
        requiredSkills: ["cooking"],
        assignedTo: volunteer2._id,
        event: foodDrive._id,
        status: "in progress"
      }
    ]);

    console.log('✅ Database seeded successfully!');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    mongoose.connection.close();
  }
};

// 6. RUN THE SEED SCRIPT
seedDB();