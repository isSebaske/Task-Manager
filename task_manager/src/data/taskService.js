import httpService from "../utils/httpService";
import config from "../utils/config.json";

const apiEnd = config.apiUrl + "/tasks";

function taskUrl(id) {
  return `${apiEnd}/${id}`;
}

export function getTasks() {
  return httpService.get(apiEnd);
}

export function getTask(id) {
  console.log(httpService.get(taskUrl(id)));
  return httpService.get(taskUrl(id));
}

export function saveTask(task) {
  if (task._id) {
    const body = { ...task };
    delete body._id;
    return httpService.put(taskUrl(task._id), body);
  }

  return httpService.post(apiEnd, task);
}

export function deleteTask(taskId) {
  return httpService.delete(taskUrl(taskId));
}
