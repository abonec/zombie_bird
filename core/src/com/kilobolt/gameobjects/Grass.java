package com.kilobolt.gameobjects;

import com.badlogic.gdx.Gdx;

public class Grass extends Scrollable {

	public Grass(float x, float y, int width, int height, float scrollSpeed) {
		super(x, y, width, height, scrollSpeed);
	}

	@Override
	public void update(float delta) {
		super.update(delta);
		Gdx.app.log("Grass", position.y + "");
	}

}
