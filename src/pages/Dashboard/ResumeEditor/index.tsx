import React, { useState, useCallback } from 'react';
import { Save, Download, FileText, Upload } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { uploadAndParseResume } from '@/lib/services/resumeParser';
import type { ResumeSection, ResumeTemplate } from '@/types';

export const ResumeEditor: React.FC = () => {
  const { user } = useAuth();
  const [sections, setSections] = useState<ResumeSection[]>([]);
  const [template, setTemplate] = useState<ResumeTemplate | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    setIsUploading(true);
    try {
      const parsedResume = await uploadAndParseResume(file, user.uid);
      setSections(parsedResume.sections);
      setTemplate(parsedResume.template);
    } catch (error) {
      console.error('Error parsing resume:', error);
      // Handle error appropriately
    } finally {
      setIsUploading(false);
    }
  }, [user]);

  const handleSectionChange = (index: number, content: string) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], content };
    setSections(newSections);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Resume Editor</h1>
        <div className="flex gap-4">
          {/* File upload button */}
          <label className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            <Upload className="w-4 h-4 mr-2" />
            {isUploading ? 'Uploading...' : 'Upload Resume'}
          </label>

          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </button>
        </div>
      </div>

      {template ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={section.title} className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">{section.title}</h2>
                <textarea
                  rows={6}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder={`Enter your ${section.title.toLowerCase()}...`}
                  value={section.content}
                  onChange={(e) => handleSectionChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Preview</h2>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
            <div 
              className="prose max-w-none"
              style={{
                fontFamily: template.font,
                fontSize: template.fontSize,
                lineHeight: template.spacing,
                margin: template.margins,
                color: template.colors.primary
              }}
            >
              {sections.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 style={{ color: template.colors.secondary }} className="text-lg font-medium">
                    {section.title}
                  </h3>
                  <div className="mt-2 whitespace-pre-wrap">{section.content || 'No content yet...'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No resume uploaded</h3>
          <p className="mt-1 text-sm text-gray-500">Upload your resume to get started with editing</p>
        </div>
      )}
    </div>
  );
};
