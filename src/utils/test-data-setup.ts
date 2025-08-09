import { StudyPlan, StudySession, Task } from '../types';

/**
 * Creates realistic test data with properly tracked sessions and reasonable deadlines
 */
export const createRealisticTestData = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const dayBeforeYesterday = new Date(today);
  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const fourDaysAgo = new Date(today);
  fourDaysAgo.setDate(fourDaysAgo.getDate() - 4);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  const testTasks: Task[] = [
    // 1. Task with missed deadline (last session was missed)
    {
      id: 'overdue-task-1',
      title: 'Chemistry Lab Report',
      description: 'Complete analysis and write lab report for experiment 3',
      deadline: yesterday.toISOString(),
      importance: true,
      estimatedHours: 4,
      status: 'pending', // Still pending because last session was missed
      createdAt: fourDaysAgo.toISOString(),
      category: 'Science'
    },
    
    // 2. Task with upcoming tight deadline
    {
      id: 'urgent-task-1',
      title: 'History Essay',
      description: 'Write 2000-word essay on World War II impacts',
      deadline: tomorrow.toISOString(),
      importance: true,
      estimatedHours: 6,
      status: 'in_progress', // Partially completed
      createdAt: threeDaysAgo.toISOString(),
      category: 'History'
    },

    // 3. Task with reasonable deadline
    {
      id: 'normal-task-1',
      title: 'Math Problem Set',
      description: 'Complete calculus problems 1-20',
      deadline: dayAfterTomorrow.toISOString(),
      importance: false,
      estimatedHours: 3,
      status: 'pending',
      createdAt: yesterday.toISOString(),
      category: 'Mathematics'
    },

    // 4. Long-term project
    {
      id: 'project-task-1',
      title: 'Final Research Project',
      description: 'Research and write final semester project',
      deadline: nextWeek.toISOString(),
      importance: true,
      estimatedHours: 12,
      status: 'in_progress',
      createdAt: fourDaysAgo.toISOString(),
      category: 'Research'
    },

    // 5. Task that was completed
    {
      id: 'completed-task-1',
      title: 'English Reading',
      description: 'Read chapters 5-8 of assigned novel',
      deadline: yesterday.toISOString(),
      importance: false,
      estimatedHours: 3,
      status: 'completed',
      createdAt: fourDaysAgo.toISOString(),
      category: 'Literature'
    },

    // 6. Task with missed sessions but still doable
    {
      id: 'behind-task-1',
      title: 'Programming Assignment',
      description: 'Implement data structures homework',
      deadline: dayAfterTomorrow.toISOString(),
      importance: true,
      estimatedHours: 5,
      status: 'pending', // Behind schedule due to missed sessions
      createdAt: threeDaysAgo.toISOString(),
      category: 'Computer Science'
    }
  ];

  const testStudyPlans: StudyPlan[] = [
    // Four days ago - mixed results
    {
      id: `plan-${fourDaysAgo.toISOString().split('T')[0]}`,
      date: fourDaysAgo.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'project-task-1',
          scheduledTime: `${fourDaysAgo.toISOString().split('T')[0]} 09:00`,
          startTime: '09:00',
          endTime: '11:00',
          allocatedHours: 2,
          sessionNumber: 1,
          isFlexible: true,
          status: 'completed',
          actualHours: 2.5,
          completedAt: `${fourDaysAgo.toISOString().split('T')[0]}T11:30:00.000Z`
        },
        {
          taskId: 'completed-task-1',
          scheduledTime: `${fourDaysAgo.toISOString().split('T')[0]} 14:00`,
          startTime: '14:00',
          endTime: '15:30',
          allocatedHours: 1.5,
          sessionNumber: 1,
          isFlexible: true,
          status: 'completed',
          actualHours: 1.5,
          completedAt: `${fourDaysAgo.toISOString().split('T')[0]}T15:30:00.000Z`
        },
        {
          taskId: 'overdue-task-1',
          scheduledTime: `${fourDaysAgo.toISOString().split('T')[0]} 16:00`,
          startTime: '16:00',
          endTime: '17:30',
          allocatedHours: 1.5,
          sessionNumber: 1,
          isFlexible: true,
          status: 'completed',
          actualHours: 1.5,
          completedAt: `${fourDaysAgo.toISOString().split('T')[0]}T17:30:00.000Z`
        }
      ],
      totalStudyHours: 5,
      availableHours: 8
    },

    // Three days ago - some missed sessions
    {
      id: `plan-${threeDaysAgo.toISOString().split('T')[0]}`,
      date: threeDaysAgo.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'urgent-task-1',
          scheduledTime: `${threeDaysAgo.toISOString().split('T')[0]} 10:00`,
          startTime: '10:00',
          endTime: '12:00',
          allocatedHours: 2,
          sessionNumber: 1,
          isFlexible: true,
          status: 'completed',
          actualHours: 2,
          completedAt: `${threeDaysAgo.toISOString().split('T')[0]}T12:00:00.000Z`
        },
        {
          taskId: 'behind-task-1',
          scheduledTime: `${threeDaysAgo.toISOString().split('T')[0]} 15:00`,
          startTime: '15:00',
          endTime: '17:00',
          allocatedHours: 2,
          sessionNumber: 1,
          isFlexible: true,
          status: 'missed' // This was missed
        },
        {
          taskId: 'completed-task-1',
          scheduledTime: `${threeDaysAgo.toISOString().split('T')[0]} 19:00`,
          startTime: '19:00',
          endTime: '20:30',
          allocatedHours: 1.5,
          sessionNumber: 2,
          isFlexible: true,
          status: 'completed',
          actualHours: 1.5,
          completedAt: `${threeDaysAgo.toISOString().split('T')[0]}T20:30:00.000Z`
        }
      ],
      totalStudyHours: 5.5,
      availableHours: 7
    },

    // Day before yesterday - more missed sessions
    {
      id: `plan-${dayBeforeYesterday.toISOString().split('T')[0]}`,
      date: dayBeforeYesterday.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'overdue-task-1',
          scheduledTime: `${dayBeforeYesterday.toISOString().split('T')[0]} 09:00`,
          startTime: '09:00',
          endTime: '11:00',
          allocatedHours: 2,
          sessionNumber: 2,
          isFlexible: true,
          status: 'completed',
          actualHours: 2,
          completedAt: `${dayBeforeYesterday.toISOString().split('T')[0]}T11:00:00.000Z`
        },
        {
          taskId: 'urgent-task-1',
          scheduledTime: `${dayBeforeYesterday.toISOString().split('T')[0]} 14:00`,
          startTime: '14:00',
          endTime: '16:00',
          allocatedHours: 2,
          sessionNumber: 2,
          isFlexible: true,
          status: 'completed',
          actualHours: 1.5, // Finished early
          completedAt: `${dayBeforeYesterday.toISOString().split('T')[0]}T15:30:00.000Z`
        },
        {
          taskId: 'behind-task-1',
          scheduledTime: `${dayBeforeYesterday.toISOString().split('T')[0]} 17:00`,
          startTime: '17:00',
          endTime: '19:00',
          allocatedHours: 2,
          sessionNumber: 2,
          isFlexible: true,
          status: 'missed' // Another missed session
        }
      ],
      totalStudyHours: 6,
      availableHours: 8
    },

    // Yesterday - critical missed session
    {
      id: `plan-${yesterday.toISOString().split('T')[0]}`,
      date: yesterday.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'overdue-task-1',
          scheduledTime: `${yesterday.toISOString().split('T')[0]} 13:00`,
          startTime: '13:00',
          endTime: '13:30',
          allocatedHours: 0.5, // Final session to complete the task
          sessionNumber: 3,
          isFlexible: true,
          status: 'missed' // THIS IS WHY THE TASK IS NOW OVERDUE
        },
        {
          taskId: 'urgent-task-1',
          scheduledTime: `${yesterday.toISOString().split('T')[0]} 16:00`,
          startTime: '16:00',
          endTime: '18:00',
          allocatedHours: 2,
          sessionNumber: 3,
          isFlexible: true,
          status: 'completed',
          actualHours: 2,
          completedAt: `${yesterday.toISOString().split('T')[0]}T18:00:00.000Z`
        },
        {
          taskId: 'project-task-1',
          scheduledTime: `${yesterday.toISOString().split('T')[0]} 20:00`,
          startTime: '20:00',
          endTime: '21:30',
          allocatedHours: 1.5,
          sessionNumber: 2,
          isFlexible: true,
          status: 'completed',
          actualHours: 1.5,
          completedAt: `${yesterday.toISOString().split('T')[0]}T21:30:00.000Z`
        }
      ],
      totalStudyHours: 4,
      availableHours: 6
    },

    // Today - current plan with some urgent items
    {
      id: `plan-${today.toISOString().split('T')[0]}`,
      date: today.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'overdue-task-1',
          scheduledTime: `${today.toISOString().split('T')[0]} 09:00`,
          startTime: '09:00',
          endTime: '09:30',
          allocatedHours: 0.5,
          sessionNumber: 4, // Rescheduled from yesterday
          isFlexible: false, // Not flexible because it's overdue
          status: 'scheduled'
        },
        {
          taskId: 'urgent-task-1',
          scheduledTime: `${today.toISOString().split('T')[0]} 11:00`,
          startTime: '11:00',
          endTime: '13:00',
          allocatedHours: 2,
          sessionNumber: 4, // Final session for this task
          isFlexible: false,
          status: 'scheduled'
        },
        {
          taskId: 'normal-task-1',
          scheduledTime: `${today.toISOString().split('T')[0]} 15:00`,
          startTime: '15:00',
          endTime: '16:30',
          allocatedHours: 1.5,
          sessionNumber: 1,
          isFlexible: true,
          status: 'scheduled'
        },
        {
          taskId: 'behind-task-1',
          scheduledTime: `${today.toISOString().split('T')[0]} 19:00`,
          startTime: '19:00',
          endTime: '20:00',
          allocatedHours: 1,
          sessionNumber: 3, // Catching up after missed sessions
          isFlexible: true,
          status: 'scheduled'
        }
      ],
      totalStudyHours: 5,
      availableHours: 8
    },

    // Tomorrow - planned sessions
    {
      id: `plan-${tomorrow.toISOString().split('T')[0]}`,
      date: tomorrow.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'normal-task-1',
          scheduledTime: `${tomorrow.toISOString().split('T')[0]} 10:00`,
          startTime: '10:00',
          endTime: '11:30',
          allocatedHours: 1.5,
          sessionNumber: 2,
          isFlexible: true,
          status: 'scheduled'
        },
        {
          taskId: 'behind-task-1',
          scheduledTime: `${tomorrow.toISOString().split('T')[0]} 14:00`,
          startTime: '14:00',
          endTime: '16:00',
          allocatedHours: 2,
          sessionNumber: 4,
          isFlexible: true,
          status: 'scheduled'
        },
        {
          taskId: 'project-task-1',
          scheduledTime: `${tomorrow.toISOString().split('T')[0]} 17:00`,
          startTime: '17:00',
          endTime: '20:00',
          allocatedHours: 3,
          sessionNumber: 3,
          isFlexible: true,
          status: 'scheduled'
        }
      ],
      totalStudyHours: 6.5,
      availableHours: 8
    }
  ];

  return { testTasks, testStudyPlans };
};

/**
 * Creates test data with missed sessions for testing the enhanced redistribution system
 */
export const createTestDataWithMissedSessions = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const dayBeforeYesterday = new Date(today);
  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
  
  const testTasks: Task[] = [
    {
      id: 'test-task-1',
      title: 'Math Homework',
      description: 'Complete algebra exercises',
      deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
      importance: true,
      estimatedHours: 3,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Mathematics'
    },
    {
      id: 'test-task-2', 
      title: 'Reading Assignment',
      description: 'Read chapter 5-7',
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days
      importance: false,
      estimatedHours: 2,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Literature'
    },
    {
      id: 'test-task-3',
      title: 'Project Research',
      description: 'Research for final project',
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days
      importance: true,
      estimatedHours: 4,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Research'
    }
  ];

  const testStudyPlans: StudyPlan[] = [
    // Yesterday's plan with missed sessions
    {
      id: `plan-${yesterday.toISOString().split('T')[0]}`,
      date: yesterday.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'test-task-1',
          scheduledTime: `${yesterday.toISOString().split('T')[0]} 09:00`,
          startTime: '09:00',
          endTime: '10:30',
          allocatedHours: 1.5,
          sessionNumber: 1,
          isFlexible: true,
          status: 'missed' // This will be detected as missed
        },
        {
          taskId: 'test-task-2',
          scheduledTime: `${yesterday.toISOString().split('T')[0]} 14:00`,
          startTime: '14:00',
          endTime: '15:30',
          allocatedHours: 1.5,
          sessionNumber: 1,
          isFlexible: true,
          status: 'missed' // This will be detected as missed
        }
      ],
      totalStudyHours: 3,
      availableHours: 8
    },
    // Day before yesterday with mixed sessions
    {
      id: `plan-${dayBeforeYesterday.toISOString().split('T')[0]}`,
      date: dayBeforeYesterday.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'test-task-3',
          scheduledTime: `${dayBeforeYesterday.toISOString().split('T')[0]} 10:00`,
          startTime: '10:00',
          endTime: '12:00',
          allocatedHours: 2,
          sessionNumber: 1,
          isFlexible: true,
          status: 'missed' // This will be detected as missed
        },
        {
          taskId: 'test-task-1',
          scheduledTime: `${dayBeforeYesterday.toISOString().split('T')[0]} 15:00`,
          startTime: '15:00',
          endTime: '16:00',
          allocatedHours: 1,
          sessionNumber: 2,
          isFlexible: true,
          done: true,
          status: 'completed' // This one was completed
        }
      ],
      totalStudyHours: 3,
      availableHours: 8
    },
    // Today's plan (current)
    {
      id: `plan-${today.toISOString().split('T')[0]}`,
      date: today.toISOString().split('T')[0],
      plannedTasks: [
        {
          taskId: 'test-task-2',
          scheduledTime: `${today.toISOString().split('T')[0]} 09:00`,
          startTime: '09:00',
          endTime: '10:00',
          allocatedHours: 1,
          sessionNumber: 2,
          isFlexible: true,
          status: 'scheduled'
        }
      ],
      totalStudyHours: 1,
      availableHours: 8
    }
  ];

  return { testTasks, testStudyPlans };
};

/**
 * Sets up realistic test data in localStorage for testing
 */
export const setupRealisticTestData = () => {
  const { testTasks, testStudyPlans } = createRealisticTestData();
  
  localStorage.setItem('timepilot-tasks', JSON.stringify(testTasks));
  localStorage.setItem('timepilot-studyPlans', JSON.stringify(testStudyPlans));
  
  console.log('Realistic test data setup complete!');
  console.log('Tasks created:', testTasks.length);
  console.log('Study plans created:', testStudyPlans.length);
  
  // Calculate and log session statistics
  const allSessions = testStudyPlans.flatMap(plan => plan.plannedTasks);
  const completedSessions = allSessions.filter(s => s.status === 'completed');
  const missedSessions = allSessions.filter(s => s.status === 'missed');
  const scheduledSessions = allSessions.filter(s => s.status === 'scheduled');
  
  console.log('Session breakdown:');
  console.log('- Completed:', completedSessions.length);
  console.log('- Missed:', missedSessions.length);
  console.log('- Scheduled:', scheduledSessions.length);
  
  // Calculate total hours by task
  console.log('\nHour tracking by task:');
  testTasks.forEach(task => {
    const taskSessions = allSessions.filter(s => s.taskId === task.id);
    const completedHours = taskSessions
      .filter(s => s.status === 'completed')
      .reduce((total, s) => total + (s.actualHours || s.allocatedHours), 0);
    const totalScheduledHours = taskSessions.reduce((total, s) => total + s.allocatedHours, 0);
    
    console.log(`- ${task.title}: ${completedHours}/${task.estimatedHours}h completed (${totalScheduledHours}h total scheduled)`);
  });
  
  // Reload the page to reflect changes
  window.location.reload();
};

/**
 * Sets up test data in localStorage for testing
 */
export const setupTestData = () => {
  const { testTasks, testStudyPlans } = createTestDataWithMissedSessions();
  
  localStorage.setItem('timepilot-tasks', JSON.stringify(testTasks));
  localStorage.setItem('timepilot-studyPlans', JSON.stringify(testStudyPlans));
  
  console.log('Test data setup complete!');
  console.log('Tasks created:', testTasks.length);
  console.log('Study plans created:', testStudyPlans.length);
  console.log('Missed sessions created:', 
    testStudyPlans.reduce((count, plan) => 
      count + plan.plannedTasks.filter(session => session.status === 'missed').length, 0
    )
  );
  
  // Reload the page to reflect changes
  window.location.reload();
};

/**
 * Creates test data specifically for demonstrating balanced priority mode
 */
export const createBalancedPriorityTestData = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextMonth = new Date(today);
  nextMonth.setDate(nextMonth.getDate() + 30);

  const testTasks: Task[] = [
    // Q1: Important & Urgent
    {
      id: 'urgent-important-1',
      title: 'Final Exam Prep',
      description: 'Prepare for tomorrow\'s final exam',
      deadline: tomorrow.toISOString(),
      importance: true,
      estimatedHours: 4,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Study'
    },
    {
      id: 'urgent-important-2',
      title: 'Project Deadline',
      description: 'Complete urgent project due soon',
      deadline: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      importance: true,
      estimatedHours: 6,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Work'
    },

    // Q2: Important but Not Urgent
    {
      id: 'important-1',
      title: 'Research Paper',
      description: 'Work on important research paper',
      deadline: nextWeek.toISOString(),
      importance: true,
      estimatedHours: 8,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Study'
    },
    {
      id: 'important-2',
      title: 'Skill Development',
      description: 'Learn new programming language',
      deadline: nextMonth.toISOString(),
      importance: true,
      estimatedHours: 12,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Personal'
    },

    // Q3: Urgent but Not Important
    {
      id: 'urgent-1',
      title: 'Administrative Task',
      description: 'Complete urgent paperwork',
      deadline: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      importance: false,
      estimatedHours: 2,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Administrative'
    },

    // Q4: Neither Urgent nor Important
    {
      id: 'regular-1',
      title: 'Organize Files',
      description: 'Clean up computer files',
      deadline: nextMonth.toISOString(),
      importance: false,
      estimatedHours: 3,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Personal'
    },
    {
      id: 'regular-2',
      title: 'Read Articles',
      description: 'Catch up on reading',
      deadline: nextMonth.toISOString(),
      importance: false,
      estimatedHours: 4,
      status: 'pending',
      createdAt: new Date().toISOString(),
      category: 'Personal'
    }
  ];

  return { testTasks, testStudyPlans: [] };
};

export const setupBalancedPriorityTest = () => {
  const { testTasks } = createBalancedPriorityTestData();

  // Save to localStorage
  localStorage.setItem('timepilot-tasks', JSON.stringify(testTasks));
  localStorage.setItem('timepilot-studyPlans', JSON.stringify([]));

  // Also set balanced priority mode in settings
  const currentSettings = JSON.parse(localStorage.getItem('timepilot-settings') || '{}');
  const updatedSettings = {
    ...currentSettings,
    studyPlanMode: 'balanced'
  };
  localStorage.setItem('timepilot-settings', JSON.stringify(updatedSettings));

  console.log('Balanced priority test data loaded:');
  console.log('Tasks:', testTasks);
  console.log('Mode set to: balanced');

  // Trigger a page reload to apply the new data
  window.location.reload();
};

// Expose functions globally for easy access in browser console
(window as any).setupTestData = setupTestData;
(window as any).setupRealisticTestData = setupRealisticTestData;
(window as any).setupBalancedPriorityTest = setupBalancedPriorityTest;
