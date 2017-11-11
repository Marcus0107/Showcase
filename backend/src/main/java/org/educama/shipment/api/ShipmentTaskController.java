package org.educama.shipment.api;

import org.educama.shipment.api.datastructure.ShipmentTaskDS;
import org.educama.shipment.api.resource.ShipmentTaskListResource;
import org.educama.shipment.api.resource.ShipmentTaskResource;
import org.educama.shipment.boundary.ShipmentTaskBoundaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * REST-Service to access shipment task resources.
 */
@RestController
@RequestMapping(path = ShipmentTaskController.SHIPMENTTASK_RESOURCE_PATH, produces = {MediaType.APPLICATION_JSON_VALUE})
public class ShipmentTaskController {

    public static final String SHIPMENTTASK_RESOURCE_PATH = "/educama/v1/tasks";

    @Autowired
    private ShipmentTaskBoundaryService shipmentTaskBoundaryService;

    /**
     *
     * @return a Tasklist assigned to user "educama"
     */
    @RequestMapping(value = "/active", method = RequestMethod.GET)
    public ShipmentTaskListResource getTasks() {
        List <ShipmentTaskDS> tasks = shipmentTaskBoundaryService.findAllActive();
        ShipmentTaskListResource taskList = new ShipmentTaskListResource().fromActiveTaskCollection(tasks);
        return taskList;
    }

    /**
     *
     * @return a Tasklist assigned to user "educama" and only enabled tasks
     */
    @RequestMapping(value = "/enabled", method = RequestMethod.GET)
    public ShipmentTaskListResource getEnabledTasks() {
        List<ShipmentTaskDS> tasks = shipmentTaskBoundaryService.findAllEnabled();
        ShipmentTaskListResource taskList = new ShipmentTaskListResource().fromActiveTaskCollection(tasks);
        return taskList;
    }

    /**
     * API call to manually start an enabled task by trackingId and name.
     *
     */
    @RequestMapping(value = "/enabled/start/{trackingId}/{name}", method = RequestMethod.POST)
    public ResponseEntity<?> manuallyStartEnabledTask(@PathVariable("trackingId") String trackingId, @PathVariable("name") String name,
                                                      @Valid @RequestBody ShipmentTaskResource shipmentTaskResource) {
        shipmentTaskBoundaryService.manuallyStartEnabledTask(trackingId, name);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
