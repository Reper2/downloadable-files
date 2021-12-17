	}
	
	if (_platformerMode) {
		if (collideLeft_ != 0 && collideRight_ != 0) {
			
			// Why is this code so random...
			
			//CCLog("Now?");
			
			CCRect r = getObjectRect();
			
			bool shouldIgnore = false;
			
			//CCLog("Top: %f, Bottom: %f, Player: %f, Last: %f,collideTop_, collideBottom_, getPosition().y, _lastPosition.y);
			
			float difference = fabs(collideTop_ - collideBottom_);
			
			float yPos = getPosition().y;
			
			if (difference == 0 ||
				(!gravityFlipped_ && collideTop_ < yPos && collideTop_ < _lastPosition.y) ||
				(gravityFlipped_ && collideBottom_ > yPos && collideBottom_ > _lastPosition.y)) {
				shouldIgnore = true;