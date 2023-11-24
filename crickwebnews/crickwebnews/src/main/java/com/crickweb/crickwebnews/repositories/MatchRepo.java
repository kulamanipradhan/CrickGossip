package com.crickweb.crickwebnews.repositories;

import com.crickweb.crickwebnews.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match,Integer>{
    //Match Fetcch by Team name

    Optional<Match> findByTeamHeading(String  teamHeading);
}
