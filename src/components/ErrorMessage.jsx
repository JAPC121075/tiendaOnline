import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-red-500 flex items-center">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>{message}</span>
      </div>
    </div>
  );
};