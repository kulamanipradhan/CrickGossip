package com.crickweb.crickwebnews.services;

import com.crickweb.crickwebnews.entities.Match;

import java.util.List;

public interface MatchService {

    List<Match> getLiveMatchScores();
    List<List<String>> getPointTable();

    List<Match> getAllMatches();

}
