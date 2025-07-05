import User from '../Models/User.js';

export const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
  export const updateProfile = async (req, res) => {
    try {
      const { name, dateOfBirth, age, contactNumber } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { name, dateOfBirth, age, contactNumber },
        { new: true, runValidators: true }
      ).select('-password');
  
      return res.status(200).json({ message: 'Profile updated', user: updatedUser });
    } catch (err) {
      return res.status(500).json({ message: 'Update failed', error: err.message });
    }
  };