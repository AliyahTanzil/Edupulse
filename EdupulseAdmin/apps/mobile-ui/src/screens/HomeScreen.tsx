import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardCard from '../components/DashboardCard';

const HomeScreen: React.FC = () => {
  const dashboardItems = [
    { title: 'Class', color: '#3B82F6' },
    { title: 'SIS', color: '#06B6D4' },
    { title: 'Fees', color: '#22C55E' },
    { title: 'Library', color: '#A855F7' },
    { title: 'Attendance', color: '#F97316' },
    { title: 'Exams', color: '#FBBF24' },
    { title: 'HR', color: '#EF4444' },
    { title: 'Timetable', color: '#6366F1' },
    { title: 'Reports', color: '#10B981' },
    { title: 'Chat', color: '#EC4899' },
    { title: 'Hostel', color: '#B45309' },
    { title: 'Transport', color: '#3B82F6' },
    { title: 'Staff', color: '#06B6D4' },
    { title: 'Students', color: '#F43F5E' },
    { title: 'Parents', color: '#A855F7' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>EduPulse</Text>
          <Text style={styles.subtitle}>Admin Dashboard</Text>
        </View>
        
        <View style={styles.grid}>
          {dashboardItems.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              color={item.color}
              onPress={() => console.log(`${item.title} pressed`)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 4,
    justifyContent: 'flex-start',
  },
});

export default HomeScreen;
