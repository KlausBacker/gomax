package com.gomax.gmx.controllers;

import com.gomax.gmx.entities.Room;
import com.gomax.gmx.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/rooms")
public class RoomController {

    private RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }


    @PostMapping("")
    public ResponseEntity<Room> postRoom(@RequestBody Room r) {
        return new ResponseEntity<>(this.roomService.saveRoom(r),
                HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long id) {
        return new ResponseEntity<>(this.roomService.findRoomById(id).orElse(null), HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Room> updateRoom(@RequestBody Room r) {
        return new ResponseEntity<>(this.roomService.updateRoom(r),
                HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable Long id) {
        this.roomService.deleteRoom(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<Room>> getRooms() {
        return new ResponseEntity<>(this.roomService.findAllRooms(), HttpStatus.OK);
    }


}
