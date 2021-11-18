package com.aps.webapp.repository;

import java.util.Optional;

import com.aps.webapp.models.ERole;
import com.aps.webapp.models.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
