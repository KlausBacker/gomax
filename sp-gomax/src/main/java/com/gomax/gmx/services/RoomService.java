package com.gomax.gmx.services;

import com.gomax.gmx.entities.Room;
import com.gomax.gmx.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    private RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }


    public Room saveRoom(Room r) {
        return this.roomRepository.save(r);
    }

    public List<Room> findAllRooms() {
        //CAST
        return (List<Room>) roomRepository.findAll();
    }

    public Optional<Room> findRoomById(Long id) {
        return this.roomRepository.findById(id);
    }


    public Room updateRoom(Room r) {
        return this.roomRepository.save(r);
    }

    public void deleteRoom(Long id) {
        this.roomRepository.deleteById(id);
    }


}
