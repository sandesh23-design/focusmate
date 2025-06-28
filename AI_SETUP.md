# 🤖 AI-Powered FocusMate Setup Guide

## Overview
FocusMate now includes powerful AI features powered by:
- **Groq LLM** - For intelligent task analysis and recommendations
- **Hugging Face** - For image analysis and distraction detection
- **RPDF** - For PDF processing and study material analysis

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in the root directory with your API keys:

```env
# AI Service API Keys
REACT_APP_GROQ_API_KEY=your-groq-api-key-here
REACT_APP_HUGGINGFACE_API_KEY=your-huggingface-api-key-here

# Optional: Enable/disable AI features
REACT_APP_ENABLE_AI=true
REACT_APP_ENABLE_IMAGE_ANALYSIS=true
REACT_APP_ENABLE_PDF_PROCESSING=true
```

### 2. Get API Keys

#### Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your `.env` file

#### Hugging Face API Key
1. Visit [Hugging Face](https://huggingface.co/settings/tokens)
2. Sign up or log in
3. Go to Access Tokens
4. Create a new token with read permissions
5. Copy the token to your `.env` file

### 3. Features Overview

#### AI-Powered Task Builder
- **Intelligent Task Breakdown**: AI analyzes your tasks and creates optimal micro-task sequences
- **Difficulty Assessment**: Automatically determines task complexity
- **Time Estimation**: Provides realistic time estimates
- **Focus Tips**: Generates personalized focus strategies
- **Motivational Messages**: Creates encouraging messages

#### AI-Powered Attention Tracker
- **Environment Analysis**: Detects distracting objects in your workspace
- **Face Detection**: Monitors if you're present and focused
- **Real-time Recommendations**: Suggests environment improvements
- **Smart Alerts**: AI-powered distraction detection

#### AI-Powered PDF Study
- **Content Extraction**: Automatically extracts text from PDFs
- **Intelligent Summaries**: Creates study-friendly summaries
- **Key Point Identification**: Highlights important concepts
- **Flashcard Generation**: Creates study flashcards automatically
- **Difficulty Assessment**: Analyzes reading complexity
- **Study Recommendations**: Provides personalized study strategies

### 4. Usage Tips

#### For Best Results:
1. **Clear Descriptions**: Write detailed task descriptions for better AI analysis
2. **Good Lighting**: Ensure proper lighting for accurate image analysis
3. **Clean Workspace**: Minimize distractions for better environment assessment
4. **Quality PDFs**: Use text-based PDFs (not scanned images) for best content extraction

#### Privacy & Security:
- All AI processing happens through secure API calls
- No data is stored permanently on external servers
- Camera access is only used for real-time analysis
- PDF content is processed locally when possible

### 5. Troubleshooting

#### Common Issues:
- **API Key Errors**: Ensure your API keys are correct and have proper permissions
- **Camera Access**: Allow camera permissions for attention tracking
- **PDF Processing**: Some PDFs may not process if they're image-based
- **Network Issues**: AI features require internet connection

#### Fallback Mode:
If AI services are unavailable, the app will automatically fall back to basic functionality:
- Simple task breakdown
- Basic attention tracking
- Manual PDF processing

### 6. Cost Considerations

#### Groq:
- Free tier available
- Pay-per-use pricing for additional usage
- Very fast inference times

#### Hugging Face:
- Free tier available
- Rate limits apply
- Suitable for development and testing

### 7. Advanced Configuration

You can customize AI behavior by modifying the service files:
- `src/services/aiService.ts` - Groq LLM integration
- `src/services/imageService.ts` - Hugging Face image analysis
- `src/services/pdfService.ts` - PDF processing

## Support

If you encounter issues:
1. Check your API keys are correct
2. Ensure you have internet connection
3. Verify camera permissions are granted
4. Check the browser console for error messages

For more help, refer to the main README.md file. 