import PrivateRoute from '../components/PrivateRoute'; // Adjust the import path if needed
import HomePage from '../pages/home-page'; // Adjust the import path if needed

export default function HomePagePage() {
  return (
    <PrivateRoute>
      <HomePage />
    </PrivateRoute>
  );
}