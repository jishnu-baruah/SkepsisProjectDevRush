// src/components/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const TimelineItem = ({ date, time, topic, index, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pt-8"
  >
    {/* Connector Line */}
    <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-800" />
    
    {/* Event Point */}
    <motion.div
      whileHover={{ scale: 1.2 }}
      className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 
                ${color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'} 
                rounded-full flex items-center justify-center z-10 cursor-pointer
                hover:ring-4 hover:ring-opacity-50
                ${color === 'blue' ? 'hover:ring-blue-600/30' : 'hover:ring-purple-600/30'}
                transition-all duration-300`}
    >
      <div className="w-2 h-2 bg-white rounded-full" />
    </motion.div>
    
    {/* Content */}
    <motion.div
      whileHover={{ y: -5 }}
      className="text-center pt-4 px-2"
    >
      <div className="flex items-center justify-center space-x-2 mb-2">
        <Calendar className={`w-4 h-4 ${color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
        <div className="font-semibold text-white">{date}</div>
      </div>
      <div className="flex items-center justify-center space-x-2 mb-2">
        <Clock className={`w-4 h-4 ${color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
        <div className={`text-sm ${color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>
          {time}
        </div>
      </div>
      <div className="text-gray-300 text-sm font-medium">{topic}</div>
    </motion.div>
  </motion.div>
);

const Timeline = ({ track, events, color }) => (
  <div className="mb-12">
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`text-xl font-semibold mb-6 
                ${color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}
    >
      {track}
    </motion.h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          {...event}
          index={index}
          color={color}
        />
      ))}
    </div>
  </div>
);

export default Timeline;