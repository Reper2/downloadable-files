		stopActionByTag(kSHTween_Grayscale);
		_grayscaleValue = target;
	}
}

void ShaderLayer::setupGrayscaleShader()
{
	_grayscaleValueLoc = glGetUniformLocation(_rendTexSprite->getShaderProgram()->getProgram(), "_grayscaleValue");
	_grayscaleTintLoc = glGetUniformLocation(_rendTexSprite->getShaderProgram()->getProgram(), "_grayscaleTint");
	_grayscaleUseLumLoc = glGetUniformLocation(_rendTexSprite->getShaderProgram()->getProgram(), "_grayscaleUseLum");
}

void ShaderLayer::preGrayscaleShader()
{
	_rendTexSprite->getShaderProgram->setUniformLocationWith1f(_grayscaleValueLoc, _grayscaleValue);
	
	if (_grayscaleValue > 0) {
		_rendTexSprite->getShaderProgram()->setUniformLocationWith1f(_grayscaleUseLumLoc, _grayscaleUseLum);
		_rendTexSprite->getShaderProgram()->setUniformLocationWith3f(_grayscaleTintLoc, 0.0f, 1.0f, 1.0f);
	}
}